type Stack = { id: string; name: string; icon: string };
type StackCategory = { id: string; label: string; stacks: Stack[] };
type StacksData = { categories: StackCategory[] };

export type { Stack, StackCategory, StacksData };
