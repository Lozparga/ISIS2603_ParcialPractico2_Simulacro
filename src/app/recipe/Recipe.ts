import { Ingredient } from '../ingredient/Ingredient';

export class Recipe {
  id: number;
  nombre: string;
  porciones: number;
  descripcion: string;   // ✔ Faltaba
  pasos: string[];
  tiempo_minutos: number;
  dificultad: string;
  tipo: string;
  imagen: string;
  etiquetas: string[];
  ingredientes: Ingredient[];

  constructor(
    id: number,
    nombre: string,
    porciones: number,
    descripcion: string, // ✔ Faltaba
    pasos: string[],
    tiempo_minutos: number,
    dificultad: string,
    tipo: string,
    imagen: string,
    etiquetas: string[],
    ingredientes: Ingredient[]
  ) {
    this.id = id;
    this.nombre = nombre;
    this.porciones = porciones;
    this.descripcion = descripcion; // ✔ Asignación
    this.pasos = pasos;
    this.tiempo_minutos = tiempo_minutos;
    this.dificultad = dificultad;
    this.tipo = tipo;
    this.imagen = imagen;
    this.etiquetas = etiquetas;
    this.ingredientes = ingredientes;
  }
}
