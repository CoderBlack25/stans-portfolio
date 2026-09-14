import Image from "next/image";
import { TechStackGrid } from "@/components/tech-stack-grid";

const tools = [
  {
    name: "Figma",
    shortName: "F",
    icon: (
      <Image
        src="/icons/stack/figma-icon.svg"
        alt=""
        width={28}
        height={28}
        className="object-contain"
      />
    ),
  },
  {
    name: "Photoshop",
    shortName: "Ps",
    icon: (
      <Image
        src="/icons/stack/adobe-photoshop-icon.svg"
        alt=""
        width={28}
        height={28}
        className="object-contain"
      />
    ),
  },
  {
    name: "Illustrator",
    shortName: "Ai",
    icon: (
      <Image
        src="/icons/stack/adobe-illustrator-icon.svg"
        alt=""
        width={28}
        height={28}
        className="object-contain"
      />
    ),
  },
  {
    name: "Protopie",
    shortName: "P",
    icon: (
      <Image
        src="/icons/stack/protopie-icon.svg"
        alt=""
        width={28}
        height={28}
        className="object-contain"
      />
    ),
  },
  {
    name: "Rive",
    shortName: "R",
    icon: (
      <Image
        src="/icons/stack/rive-icon.svg"
        alt=""
        width={28}
        height={28}
        className="object-contain"
      />
    ),
  },
  {
    name: "Spline",
    shortName: "S",
    icon: (
      <Image
        src="/icons/stack/spline-icon.svg"
        alt=""
        width={28}
        height={28}
        className="object-contain"
      />
    ),
  },
  {
    name: "Framer",
    shortName: "F",
    icon: (
      <Image
        src="/icons/stack/framer-icon.svg"
        alt=""
        width={28}
        height={28}
        className="object-contain"
      />
    ),
  },
  {
    name: "Cursor",
    shortName: "C",
    icon: (
      <Image
        src="/icons/stack/cursor-icon.svg"
        alt=""
        width={28}
        height={28}
        className="object-contain"
      />
    ),
  },
  {
    name: "Claude",
    shortName: "✳",
    icon: (
      <Image
        src="/icons/stack/claude-icon.svg"
        alt=""
        width={28}
        height={28}
        className="object-contain"
      />
    ),
  },
  {
    name: "V0",
    shortName: "v0",
    icon: (
      <Image
        src="/icons/stack/v0-icon.svg"
        alt=""
        width={28}
        height={28}
        className="object-contain"
      />
    ),
  },
  {
    name: "ChatGPT",
    shortName: "◉",
    icon: (
      <Image
        src="/icons/stack/openai-icon.svg"
        alt=""
        width={28}
        height={28}
        className="object-contain"
      />
    ),
  },
  {
    name: "Lovable",
    shortName: "L",
    icon: (
      <Image
        src="/icons/stack/lovable-icon.svg"
        alt=""
        width={28}
        height={28}
        className="object-contain"
      />
    ),
  },
  {
    name: "After Effect",
    shortName: "Ae",
    icon: (
      <Image
        src="/icons/stack/adobe-after-effect-icon.svg"
        alt=""
        width={28}
        height={28}
        className="object-contain"
      />
    ),
  },
  {
    name: "Supernova",
    shortName: "✣",
    icon: (
      <Image
        src="/icons/stack/supernova-icon.svg"
        alt=""
        width={28}
        height={28}
        className="object-contain"
      />
    ),
  },
  {
    name: "Maze",
    shortName: "〰",
    icon: (
      <Image
        src="/icons/stack/maze-icon.svg"
        alt=""
        width={28}
        height={28}
        className="object-contain"
      />
    ),
  },
  {
    name: "Voiceflow",
    shortName: "V",
    icon: (
      <Image
        src="/icons/stack/voiceflow-icon.svg"
        alt=""
        width={28}
        height={28}
        className="object-contain"
      />
    ),
  },
  {
    name: "Jitter",
    shortName: "◆",
    icon: (
      <Image
        src="/icons/stack/jitter-icon.svg"
        alt=""
        width={28}
        height={28}
        className="object-contain"
      />
    ),
  },
  {
    name: "Rotato",
    shortName: "◔",
    icon: (
      <Image
        src="/icons/stack/rotato-icon.svg"
        alt=""
        width={28}
        height={28}
        className="object-contain"
      />
    ),
  },
  {
    name: "Premiere",
    shortName: "Pr",
    icon: (
      <Image
        src="/icons/stack/adobe-premiere-pro-icon.svg"
        alt=""
        width={28}
        height={28}
        className="object-contain"
      />
    ),
  },
  {
    name: "Davinci",
    shortName: "●",
    icon: (
      <Image
        src="/icons/stack/davinci-resolve-icon.svg"
        alt=""
        width={28}
        height={28}
        className="object-contain"
      />
    ),
  },
  {
    name: "Botpress",
    shortName: "✣",
    icon: (
      <Image
        src="/icons/stack/botpress-icon.svg"
        alt=""
        width={28}
        height={28}
        className="object-contain"
      />
    ),
  },
  {
    name: "Jira",
    shortName: "●",
    icon: (
      <Image
        src="/icons/stack/jira-icon.svg"
        alt=""
        width={28}
        height={28}
        className="object-contain"
      />
    ),
  },
  {
    name: "Linear",
    shortName: "▨",
    icon: (
      <Image
        src="/icons/stack/linear-icon.svg"
        alt=""
        width={28}
        height={28}
        className="object-contain"
      />
    ),
  },
  {
    name: "Webflow",
    shortName: "W",
    icon: (
      <Image
        src="/icons/stack/webflow-icon.svg"
        alt=""
        width={28}
        height={28}
        className="object-contain"
      />
    ),
  },
];

export default function Stack() {
  return (
    <main>
      <TechStackGrid tools={tools} />
    </main>
  );
}
