
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypePrettyCode from "rehype-pretty-code";

export default function TestPage() {


    async function main() {
        const file = await unified()
            .use(remarkParse)
            .use(remarkRehype)
            .use(rehypePrettyCode, {
                // See Options section below.
            })
            .use(rehypeStringify)
            .process("`const numbers = [1, 2, 3]{:js}`");

        console.log(String(file));
    }

    main();

    return (
        <div>
            123
        </div>
    );
}