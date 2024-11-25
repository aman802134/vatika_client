import ApiService from "../utils/Api";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const ApiRequestService = {
  usePost: () => {
    const fetchPost = useQuery({
      queryKey: ["products"],
      queryFn: ApiService.getProduct,
    });
    return fetchPost;
  },

  useCreatePost: () => {
    const querryclient = useQueryClient();
    useMutation({
      mutationKey: ["product"],
      mutationFn: ApiService.createProduct,
      onMutate: async (data) => {
        // Cancel any outgoing refetches so they don't conflict with the mutation.
        await querryclient.cancelQueries({ queryKey: ["product"] });

        // Get the previous data from the cache.
        const previousData = querryclient.getQueryData(["products"]);
        // Update the cache with the new data.
        querryclient.setQueryData(["products"], (oldData) => [
          ...oldData,
          data,
        ]);
        // Return the previous data so it can be used in the onError function.
        return { previousData };
      },

      onError: (err, variables, context) => {
        querryclient.setQueryData(["products"], context.previousData);
      },
      onSettled: () =>
        querryclient.invalidateQueries({ queryKey: ["products"] }),
    });
  },
};
export default ApiRequestService;
