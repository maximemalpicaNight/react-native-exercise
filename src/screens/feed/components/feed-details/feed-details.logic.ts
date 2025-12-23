import { useRoute } from "@react-navigation/native";

export function useFeedDetailsLogic() {
  const route = useRoute();
  const { post } = route.params;

  return {
    post,
  };
}
