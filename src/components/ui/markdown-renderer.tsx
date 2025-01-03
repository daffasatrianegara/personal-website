import ReactMarkdown from "react-markdown";
import "github-markdown-css";
import "@/assets/styles/markdown.css"

const MarkdownRenderer = ({ mdUrl }: Readonly<{ mdUrl: string }>) => {
    return (
        <ReactMarkdown className={"markdown-body p-3 rounded"} children={mdUrl} />
    )
}

export default MarkdownRenderer