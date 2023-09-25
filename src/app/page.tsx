import Header from "@/src/layouts/header";
import { Suspense } from "react";
import LoadingComponent from "../components/loading/Loading";

export default function Home() {
  return (
    <Suspense fallback={<LoadingComponent />}>
      <main className="w-full container mx-auto">
        <Header />
      </main>
    </Suspense>
  );
}
