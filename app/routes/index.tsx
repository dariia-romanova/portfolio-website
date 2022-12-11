import { redirect } from "@remix-run/node";

export async function loader() {
  return redirect("./portfolio");
}

export default function Index() {
  return null;
};
