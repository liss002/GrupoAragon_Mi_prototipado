import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css'
})
export class Inicio {

  menuContratarVisible = false;
  menuMovilAbierto = false;

  busqueda = '';
  mensajeBusqueda = '';
  mensajeEnviado = false;

  formulario = {
    nombre: '',
    empresa: '',
    correo: '',
    telefono: '',
    servicio: '',
    mensaje: ''
  };

  mostrarMenuContratar(): void {
    this.menuContratarVisible = true;
  }

  ocultarMenuContratar(): void {
    this.menuContratarVisible = false;
  }

  alternarMenuContratar(): void {
    this.menuContratarVisible = !this.menuContratarVisible;
  }

  alternarMenuMovil(): void {
    this.menuMovilAbierto = !this.menuMovilAbierto;
  }

  cerrarMenuMovil(): void {
    this.menuMovilAbierto = false;
  }

  irAContacto(): void {
    this.menuContratarVisible = false;
    this.menuMovilAbierto = false;

    document
      .getElementById('contacto')
      ?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
  }

  seleccionarServicio(nombreServicio: string): void {
    this.formulario.servicio = nombreServicio;
    this.irAContacto();
  }

  buscarServicio(): void {
    const texto = this.busqueda
      .trim()
      .toLowerCase();

    this.mensajeBusqueda = '';

    if (!texto) {
      this.mensajeBusqueda =
        'Escribe el nombre del servicio que necesitas.';
      return;
    }

    const servicios: Array<{
      palabras: string[];
      id: string;
    }> = [
      {
        palabras: [
          'soporte',
          'reparación',
          'reparacion',
          'mantenimiento',
          'computadora',
          'laptop'
        ],
        id: 'servicio-soporte'
      },
      {
        palabras: [
          'red',
          'redes',
          'wifi',
          'router',
          'cableado',
          'internet'
        ],
        id: 'servicio-redes'
      },
      {
        palabras: [
          'cámara',
          'camara',
          'cámaras',
          'camaras',
          'vigilancia',
          'seguridad',
          'cctv'
        ],
        id: 'servicio-camaras'
      },
      {
        palabras: [
          'software',
          'sistema',
          'sistemas',
          'web',
          'página',
          'pagina',
          'programa'
        ],
        id: 'servicio-software'
      },
      {
        palabras: [
          'equipo',
          'equipos',
          'pc',
          'componentes',
          'hardware',
          'accesorios'
        ],
        id: 'servicio-equipos'
      },
      {
        palabras: [
          'consultoría',
          'consultoria',
          'asesoría',
          'asesoria'
        ],
        id: 'servicio-consultoria'
      }
    ];

    const servicioEncontrado = servicios.find(
      servicio =>
        servicio.palabras.some(
          palabra => texto.includes(palabra)
        )
    );

    if (!servicioEncontrado) {
      this.mensajeBusqueda =
        'No encontramos una coincidencia exacta. Revisa nuestros servicios disponibles.';

      document
        .getElementById('servicios')
        ?.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });

      return;
    }

    const elemento = document.getElementById(
      servicioEncontrado.id
    );

    elemento?.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });

    elemento?.classList.add('servicio-resaltado');

    window.setTimeout(() => {
      elemento?.classList.remove(
        'servicio-resaltado'
      );
    }, 1800);
  }

  enviarSolicitud(): void {
    this.mensajeEnviado = true;

    window.setTimeout(() => {
      this.mensajeEnviado = false;
    }, 5000);

    this.formulario = {
      nombre: '',
      empresa: '',
      correo: '',
      telefono: '',
      servicio: '',
      mensaje: ''
    };
  }
}
