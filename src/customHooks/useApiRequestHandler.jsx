import ApiService from "../utils/Api";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const ApiRequestService = {
  useRegister: () => {
    const querryclient = useQueryClient();
    useMutation({
      mutationKey: ["register"],
      mutationFn: (formData) => ApiService.register(formData),
      onMutate: async (formData) => {
        // Cancel any outgoing refetches so they don't conflict with the mutation.
        await querryclient.cancelQueries({ queryKey: ["register"] });

        // Get the previous data from the cache.
        const previousData = querryclient.getQueryData(["register"]);
        // Update the cache with the new data.
        querryclient.setQueryData(["register"], (oldData) => [
          ...oldData,
          formData,
        ]);
        // Return the previous data so it can be used in the onError function.
        return { previousData };
      },

      onError: (err, variables, context) => {
        querryclient.setQueryData(["regiter"], context.previousData);
      },
      /**
       * This function is called after the mutation is resolved. It takes care of
       * invalidating the cache so that the next time the data is fetched, it will
       * be fetched from the server again and the cache will be updated.
       */
      onSettled: () => {
        console.log("data send to the sever succesfully");
        querryclient.invalidateQueries({ queryKey: ["register"] });
      },
    });
  },
  useGetProduct: () => {
    const fetchPost = useQuery({
      queryKey: ["products"],
      queryFn: ApiService.getProduct,
    });
    return fetchPost;
  },

  // CreateProduct: () => {
  //   // const querryclient = useQueryClient();
  //   useMutation({
  //     mutationKey: ["create-product"],
  //     mutationFn: (formData) => ApiService.createProduct(formData),
  //   });
  // },
};
export default ApiRequestService;
