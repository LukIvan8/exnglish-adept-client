import { Stack } from "@mui/system";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main>
        <Stack direction="row" width="100vw"   component="div">
          <Link style={{margin:"0 auto", fontSize:"36px"}} href="/materials"> Materials</Link>
        </Stack>
      </main>
    </>
  );
}
