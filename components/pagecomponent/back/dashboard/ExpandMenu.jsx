import React from 'react'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import {
  ChevronsDown,
  ChevronsUp,
} from "lucide-react";

function ExpandMenu({ isOpen,setIsOpen,menuTitle,menuIcon,children }) {
  return (
    <>
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="w-[90%] space-y-2"
      >
        <CollapsibleTrigger asChild>
          <div className="flex items-center  self-start bg-sky-950">
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center gap-2 w-full justify-between"
            >
              <div className="flex items-center gap-2">
                {menuIcon}
                <p className="text-lg font-tajawal font-bold">{menuTitle}</p>
              </div>
              {isOpen ? <ChevronsUp /> : <ChevronsDown />}
            </Button>
          </div>
        </CollapsibleTrigger>

        <CollapsibleContent className="space-y-2">
         {children}
        </CollapsibleContent>
      </Collapsible>
    </>
  );
}

export default ExpandMenu
