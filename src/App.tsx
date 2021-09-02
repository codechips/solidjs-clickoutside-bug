import { Show, createSignal } from "solid-js";
import type { Component } from "solid-js";
import clickOutside from "./directives/click-outside.tsx";

// uncomment this block to make it work
// import { onCleanup } from "solid-js";

// function clickOutside(el, accessor) {
//   const onClick = (e) => !el.contains(e.target) && accessor()?.();
//   document.body.addEventListener("click", onClick);

//   onCleanup(() => document.body.removeEventListener("click", onClick));
// }

const App: Component = () => {
  const [showMenu, setShowMenu] = createSignal(false);

  return (
     <div class="p-4">
      <button type="button" class="px-4 py-1 bg-blue-300" onClick={() => setShowMenu(status => !status)}>
        open
      </button>
      <Show when={showMenu()}>
        <div
          use:clickOutside={() => setShowMenu(false)}
          class="p-4 mt-2 font-medium bg-gray-200">
          this is the menu
        </div>
      </Show>
    </div>
  );
};

export default App;
