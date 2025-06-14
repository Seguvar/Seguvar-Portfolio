import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as THREE from 'three';

@Component({
  selector: 'app-three-background',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="three-container" #threeContainer></div>
  `,
  styles: [`
    .three-container {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      pointer-events: none;
    }
  `]
})
export class ThreeBackgroundComponent implements OnInit, OnDestroy {
  @ViewChild('threeContainer', { static: true }) threeContainer!: ElementRef;

  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private particles!: THREE.Points;
  private animationId!: number;

  ngOnInit() {
    this.initThree();
    this.createParticles();
    this.animate();
    this.handleResize();
  }

  ngOnDestroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    if (this.renderer) {
      this.renderer.dispose();
    }
    window.removeEventListener('resize', this.onWindowResize.bind(this));
  }

  private initThree() {
    // Scene
    this.scene = new THREE.Scene();

    // Camera
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.camera.position.z = 5;

    // Renderer
    this.renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true 
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setClearColor(0x000000, 0);
    this.threeContainer.nativeElement.appendChild(this.renderer.domElement);
  }

  private createParticles() {
    const particleCount = 1000;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      // Position
      positions[i] = (Math.random() - 0.5) * 20;
      positions[i + 1] = (Math.random() - 0.5) * 20;
      positions[i + 2] = (Math.random() - 0.5) * 20;

      // Color (cyan to blue gradient)
      const color = new THREE.Color();
      color.setHSL(0.5 + Math.random() * 0.1, 0.8, 0.5 + Math.random() * 0.3);
      colors[i] = color.r;
      colors[i + 1] = color.g;
      colors[i + 2] = color.b;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.02,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });

    this.particles = new THREE.Points(geometry, material);
    this.scene.add(this.particles);

    // Add some geometric shapes
    this.createFloatingShapes();
  }

  private createFloatingShapes() {
    // Create floating wireframe geometries
    const shapes = [
      new THREE.BoxGeometry(0.5, 0.5, 0.5),
      new THREE.SphereGeometry(0.3, 16, 16),
      new THREE.ConeGeometry(0.3, 0.6, 8),
      new THREE.TorusGeometry(0.3, 0.1, 8, 16)
    ];

    shapes.forEach((geometry, index) => {
      const material = new THREE.MeshBasicMaterial({
        color: 0x00d4ff,
        wireframe: true,
        transparent: true,
        opacity: 0.3
      });

      const mesh = new THREE.Mesh(geometry, material);
      
      // Random position
      mesh.position.set(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      );

      // Random rotation
      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );

      // Store initial position for animation
      (mesh as any).initialPosition = mesh.position.clone();
      (mesh as any).rotationSpeed = {
        x: (Math.random() - 0.5) * 0.02,
        y: (Math.random() - 0.5) * 0.02,
        z: (Math.random() - 0.5) * 0.02
      };

      this.scene.add(mesh);
    });
  }

  private animate() {
    this.animationId = requestAnimationFrame(() => this.animate());

    const time = Date.now() * 0.0005;

    // Rotate particles
    if (this.particles) {
      this.particles.rotation.x = time * 0.2;
      this.particles.rotation.y = time * 0.3;
    }

    // Animate floating shapes
    this.scene.children.forEach((child) => {
      if (child instanceof THREE.Mesh && (child as any).rotationSpeed) {
        const mesh = child as any;
        
        // Rotation
        mesh.rotation.x += mesh.rotationSpeed.x;
        mesh.rotation.y += mesh.rotationSpeed.y;
        mesh.rotation.z += mesh.rotationSpeed.z;

        // Floating motion
        mesh.position.y = mesh.initialPosition.y + Math.sin(time + mesh.initialPosition.x) * 0.5;
        mesh.position.x = mesh.initialPosition.x + Math.cos(time + mesh.initialPosition.z) * 0.3;
      }
    });

    this.renderer.render(this.scene, this.camera);
  }

  private handleResize() {
    window.addEventListener('resize', this.onWindowResize.bind(this));
  }

  private onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
}