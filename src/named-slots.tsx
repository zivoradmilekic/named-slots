import React, { useState, useEffect, ReactChild } from "react";

export interface ReactSlots {
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
};

export function useSlots(children: any, slotsNames?: string[]) {
  const [slots, setSlots] = useState<ReactSlots>({
    children: []
  });

  useEffect(() => {
    setSlots(sortChildren(children, slotsNames));
  }, [children]);

  return slots;
};

export const NamedSlots: React.FC<any> = props => {
  return props.slots(sortChildren(props.children, props.slotsNames));
};
