import type { V2_MetaFunction } from "@remix-run/node";
import {
  Outlet
} from "@remix-run/react";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Products Index" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <Outlet />
  );
}
