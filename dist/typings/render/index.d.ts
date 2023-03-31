/// <reference types="node" />
declare const $: (selector: string) => Element | NodeList | null;
declare let callCounter: number;
declare const alphabets: string[];
declare const questionsList: string[];
declare const names: string[];
declare const dupNames: string[];
declare function getRandom(max: number): number;
declare function getRandomNames(): string;
declare function getRandomQuestion(gender: string): string;
declare const target: Element;
declare let showQuestion: boolean;
declare function getTemplate(): string;
declare function triggerTimeout(): void;
declare let interv: NodeJS.Timer;
declare function startInterval(name: string, target: Element): void;
//# sourceMappingURL=index.d.ts.map