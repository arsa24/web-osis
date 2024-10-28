// src/data-web-osis.d.ts

declare module "data-web-osis" {
  export interface BidangType {
    bidang: number;
    nama: string;
    gambar: string;
  }

  export const Bidang: BidangType[];

  export interface ProgramKerjaType {
    proker: string;
    teks: string;
    gambar: string;
  }

  export const ProgramKerja: ProgramKerjaType[];

  export interface DaftarType {
    path: string;
    teks: string;
  }

  export const DaftarNavbar: DaftarType[];
}
