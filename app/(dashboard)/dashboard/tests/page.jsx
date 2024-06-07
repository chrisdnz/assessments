import { Icons } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const questions = [];

const QUESTION_TYPE_ICON = {
  TEXT: "type",
  SINGLE_CHOICE: "radio",
  MULTIPLE_CHOICE: "check",
};

export default function TestsPage() {
  return (
    <main className="grid flex-1 gap-4 overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3">
      <div className="flex flex-col gap-4">
        <Button variant="outline">Add a new question</Button>
        <ScrollArea className="h-full">
          <div className="flex flex-col gap-2">
            <button className="flex w-full justify-between items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent">
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <Icons.singlechoice className="h-4 w-4" />
                  <span className="text-lg font-semibold">Question 1</span>
                </div>
                <span className="text-muted-foreground">
                  This is a question
                </span>
              </div>
              <Badge variant="secondary">5pt</Badge>
            </button>
          </div>
        </ScrollArea>
      </div>
      <div className="relative flex flex-col rounded-xl lg:col-span-2">
        <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
          <div className="flex flex-col items-center gap-1 text-center">
            <h3 className="text-2xl font-bold tracking-tight">
              Create a new Question
            </h3>
            <p className="text-sm text-muted-foreground">
              Start from scratch and create a new question
            </p>
            <Button className="mt-4">Add question</Button>
          </div>
        </div>
      </div>
    </main>
  );
}
