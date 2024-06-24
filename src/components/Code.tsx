import { createSignal } from "solid-js";

const CopyIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
  </svg>
);

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

interface CodeBlockProps {
  code: string;
  file: string;
  fileLink: string;
}

export function Code({ code, file, fileLink }: CodeBlockProps) {
  const [copied, setCopied] = createSignal(false);

  const copy = async () => {
    await navigator?.clipboard?.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <pre class="my-8 bg-[#e0e8f0] text-white font-medium h-full rounded-md">
      <a href={fileLink} target="_blank" class="link flex justify-center py-1 text-sm">{file}</a>
      <pre class="bg-[#F7F7F7] rounded-b-md h-full p-8 relative">
      <button
        onClick={copy}
        class="absolute top-4 right-4 p-2 rounded-md bg-[#e0e8f0] text-[#415F90]"
      >
        {copied() ? <CheckIcon /> : <CopyIcon />}
      </button>
      <code class="text-[#3A5683] font-medium text-sm">{code}</code>
      </pre>
    </pre>
  );
}
