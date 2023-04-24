import React, { useEffect } from "react";
import { RootState } from "@/state/root";
import { useSelector } from "react-redux";
import { IMaterialItem } from "@/data/list";
import Link from "next/link";
import { GetServerSideProps } from "next";

const MaterialPage: React.FC<{ id: number }> = ({ id }) => {
  const item = useSelector<IMaterialItem>((state: RootState) =>
    state.materials.items.find((item) => item.id === Number(id))
  );
  useEffect(() => {
    console.log(id);
  }, []);
  return (
    <div>
      <h1>Material: {item.title}</h1>
      <iframe
        allow="fullscreen"
        style={{ display: "block" }}
        src={item.url}
      ></iframe>
      <Link href="/materials">Back</Link>
    </div>
  );
};

// Позволяет избежать ошибки при переходе по ссылке в браузере
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params;
  return { props: { id } };
};

export default MaterialPage;
