import type { ScriptTag } from '../tag';

export const ClarityKey = 'clarity';

export interface ClarityOptions {
  id: string | undefined;
}

export function Clarity(options: ClarityOptions): ScriptTag | undefined {
  const id = options.id;

  if (!id) return undefined;

  return {
    type: `text/javascript`,
    children: `(function(c,l,a,r,i,t,y){
  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "${id}");`
  };
}
