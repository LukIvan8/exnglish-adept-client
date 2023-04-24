import React from 'react';
import {router} from "next/client";
import {RootState} from "@/state/root";
import {useSelector} from "react-redux";
import {IMaterialItem} from "@/data/list";
import Link from "next/link";

const MaterialPage = () => {
  const {id} = router.query;
  const item = useSelector<IMaterialItem>((state: RootState) => state.materials.items.find((item) => item.id === Number(id)));

  return (
    <div>
      <h1>Material: {item.title}</h1>
      <iframe allow="fullscreen" style={{display:"block"}} src={item.url}></iframe>
      <Link href="/materials">Back</Link>
    </div>
  );
};

export default MaterialPage;