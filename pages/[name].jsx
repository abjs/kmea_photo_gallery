
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import UserImageComponent from "../components/image.of.a.user";
export default function Main() {
  const router = useRouter();
  const [name, setName] = useState(router.query.name);
  useEffect(() => {
    setName(router.query.name);
  }, []);
  return (
    <div>
      <UserImageComponent name={name} />
    </div>
  );
}
