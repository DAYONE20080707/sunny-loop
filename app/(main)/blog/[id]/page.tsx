import React from "react";
import { useStore } from "@/store/useStore";
import { componentsConfig } from "@/lib/componentsConfig";
import { headers } from "next/headers";

interface BlogDetailProps {
  params: {
    id: string;
  };
}

export default function BlogDetail({ params }: BlogDetailProps) {
  const headersList = headers();
  const pathname = headersList.get("x-pathname") || "";

  // コンポーネントの設定を取得
  const sections = componentsConfig.BlogDetail.sections;
  const defaultTemplate = sections.blogDetail.options[0].id; // BlogDetail_02をデフォルトに

  // 選択されたテンプレートまたはデフォルトのテンプレートを使用
  const Component = sections.blogDetail.components[defaultTemplate];

  return Component
    ? React.cloneElement(Component as React.ReactElement, { params })
    : null;
}
