import { useRouter } from "expo-router";
import { useState } from "react";
import { Post } from "./feed-screen.types";

export function useFeedScreenLogic() {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);
  const [description, setDescription] = useState("");

  const posts: Post[] = [
    {
      username: "Jojo",
      profilePictue:
        "https://sortlist-core-api.s3.eu-west-1.amazonaws.com/691sw8s8dxjynerceh0xp1ge7duw",
      post: "Hello world 1",
      image:
        "https://s3-eu-west-1.amazonaws.com/blog-ecotree/blog/0001/02/47b656453f6be8c384bbf07abf3613d1e4a3fa0d.jpeg",
    },
    {
      username: "Gogo",
      profilePictue:
        "https://sortlist-core-api.s3.eu-west-1.amazonaws.com/691sw8s8dxjynerceh0xp1ge7duw",
      post: "Hello world 2",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/1200px-React_Logo_SVG.svg.png",
    },
    {
      username: "Bobo",
      profilePictue:
        "https://sortlist-core-api.s3.eu-west-1.amazonaws.com/691sw8s8dxjynerceh0xp1ge7duw",
      post: "Hello world 3",
      image:
        "https://s3-eu-west-1.amazonaws.com/blog-ecotree/blog/0001/02/47b656453f6be8c384bbf07abf3613d1e4a3fa0d.jpeg",
    },
    {
      username: "Momo",
      profilePictue:
        "https://sortlist-core-api.s3.eu-west-1.amazonaws.com/691sw8s8dxjynerceh0xp1ge7duw",
      post: "Hello world 4",
      image:
        "https://s3-eu-west-1.amazonaws.com/blog-ecotree/blog/0001/02/47b656453f6be8c384bbf07abf3613d1e4a3fa0d.jpeg",
    },
  ];

  function handlePostOnTouchEnd(post: Post) {
    return function () {
      router.push("/post-details");
    };
  }

  function handleOpenModalPress() {
    setModalVisible(true);
  }

  function handleCloseModalPress() {
    setModalVisible(false);
  }

  function handleDescriptionChange(text: string) {
    setDescription(text);
  }

  return {
    posts,
    modalVisible,
    description,
    handlePostOnTouchEnd,
    handleOpenModalPress,
    handleCloseModalPress,
    handleDescriptionChange,
  };
}
