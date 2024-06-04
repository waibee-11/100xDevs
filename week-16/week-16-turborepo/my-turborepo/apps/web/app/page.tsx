import Image from "next/image";
import { Card } from "@repo/ui/card";
import { Code } from "@repo/ui/code";
import styles from "./page.module.css";
import { Button } from "@repo/ui/button";
import { Admin } from "@repo/ui/admin";

export default function Page(): JSX.Element {
  return (
    <div>
      <Button appName="Web App">
        Hi There!
      </Button>
      <Admin />
    </div>
  );
}
