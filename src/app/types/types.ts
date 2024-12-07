export interface IProducts {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  sold: boolean;
  image: string;
  dateOfSale: string;
}
export interface IStatistics {
  totalSale: number;
  soldItems: number;
  unsoldItems: number;
}
export interface IBarChart {
  range: string;
  count: number;
}
export interface IPieChart {
  category: string;
  count: number;
}
export interface IMasterData {
  products: { page: number; perPage: number; products: IProducts[] };
  statistics: IStatistics;
  barChart: IBarChart[];
  pieChart: IPieChart[];
}
