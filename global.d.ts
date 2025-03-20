declare module "2gis-maps" {
  const DG: any;
  export default DG;

  export function map(
    arg0: string,
    arg1: { center: number[]; zoom: number }
  ): { remove: () => any } {
    throw new Error("Function not implemented.");
  }

  export const marker: (coords: [number, number]) => {
    addTo: (map: any) => void;
  };
}
