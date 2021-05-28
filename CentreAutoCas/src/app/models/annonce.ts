export class Annonce {
  constructor(
    public id: string,
    public description: string,
    public prix: number,
    public reference: string,
    public titre: string,
    public dateAnnonce: string
  ) {}
}
