import Image from "next/image";
import { baseUrl } from "@/shared/constants/baseUrl";
import { PostProps } from "./post.props";
import TextType from "@/shared/ui/textType/textType";
import styles from "./post.module.scss";

const Post = (props: PostProps) => {
  const { photo, description } = props;

  return (
    <div className={styles.post_card}>
      {photo && <Image src={`${baseUrl}/${photo}`} alt="post photo" width={1000} height={1000} unoptimized />}
      <TextType variant="mediumP">{description}</TextType>
    </div>
  );
};

export default Post;
