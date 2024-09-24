export interface Pelicula {
  nombre: string
  tipo_de_contenido: string
  directores: string[]
  fecha: string
  publicador: string
  lugar: string[]
  idioma: string[]
  duracion: string
  descripcion: string
  tags: string[]
  licencia: string
  enlace: string
  imagenes: Imagenes
  fecha_salida: string
  geobloqueo: string
  slug: string
}

export interface Imagenes {
  destacada: string
  poster: string
}