import { useEffect, useState } from "react";
import { fetchProductById } from "@/lib/data/product-data";

// Custom hook: resolves numeric segments (ids) to product titles
export function useBreadcrumbSegments(paths: string): string[] {
  const rawSegments = paths.split("/").filter((p) => p);
  const pathNames = rawSegments.filter(
    (seg) => seg !== "pages" && seg !== "admin"
  );
  const [resolved, setResolved] = useState<string[]>(pathNames);

  useEffect(() => {
    let isMounted = true;
    const current = pathNames;

    async function resolveLabels() {
      const updated = await Promise.all(
        current.map(async (seg) => {
          if (/^\d+$/.test(seg)) {
            try {
              const product = await fetchProductById(seg);
              return product?.title || seg;
            } catch {
              return seg;
            }
          }
          return seg;
        })
      );
      if (isMounted) setResolved(updated);
    }

    resolveLabels();
    return () => {
      isMounted = false;
    };
  }, [paths, pathNames]);

  return resolved;
}
