import { useState, useEffect, ReactChild } from "react";

interface ReactSlots {
  [key: string]: ReactChild | ReactChild[];
}

function sortChildren(children: ReactChild[], slotsNames?: string[]) {
  return children.reduce<ReactSlots>(
    (slots: any, child: any) => {
      let slot: string | null =
        !!child["key"] && !!slotsNames && slotsNames.includes(child["key"])
          ? child["key"]
          : null;

      const oldChildren: ReactChild[] = slots.children;

      return slot
        ? {
            ...slots,
            [slot]: child
          }
        : {
            ...slots,
            children: [...oldChildren, child]
          };
    },
    {
      children: []
    }
  );
}

function useSlots(children: any, slotsNames?: string[]) {
  const [slots, setSlots] = useState<ReactSlots>({
    children: []
  });

  useEffect(() => {
    setSlots(sortChildren(children, slotsNames));
  }, [children]);

  return slots;
}

export default useSlots;
