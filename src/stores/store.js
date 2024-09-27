import { create } from 'zustand';

const useStore = create((set) => ({
  scene: null,
  objects: [],
  timeline: [],

  setScene: (scene) => set({ scene }),
  addObject: (object) => set((state) => ({ objects: [...state.objects, object] })),
  removeObject: (objectId) => set((state) => ({
    objects: state.objects.filter((obj) => obj.id !== objectId)
  })),
  updateTimeline: (timeline) => set({ timeline }),
  // TODO: Implement timeline actions
}));

export { useStore };

// import { create } from 'zustand'

// const useStore = create((set) => ({
//   count: 1,
//   inc: () => set((state) => ({ count: state.count + 1 })),
// }))

// function Counter() {
//   const { count, inc } = useStore()
//   return (
//     <div>
//       <span>{count}</span>
//       <button onClick={inc}>one up</button>
//     </div>
//   )
// }