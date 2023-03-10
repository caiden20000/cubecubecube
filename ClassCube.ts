import { Angle } from './ClassAngle';
import { Point } from './ClassPoint';
import { Quad } from './ClassQuad';
import { Shape } from './ClassShape';

export { Cube };

class Cube extends Shape {
  constructor(public center: Point, public size: number) {
    super(center.x, center.y, center.z);
    this.init();
  }

  init() {
    this.quads = [];
    let hs = this.size / 2;
    /* 
    // xyz, p = positive, n = negative
    let ppp = new Point(hs, hs, hs);
    let ppn = new Point(hs, hs, -hs);
    let pnp = new Point(hs, -hs, hs);
    let pnn = new Point(hs, -hs, -hs);
    let npp = new Point(-hs, hs, hs);
    let npn = new Point(-hs, hs, -hs);
    let nnp = new Point(-hs, -hs, hs);
    let nnn = new Point(-hs, -hs, -hs);
    // Front
    this.addQuad(new Quad(ppn, npn, nnn, pnn));
    // Back
    this.addQuad(new Quad(ppp, pnp, nnp, npp));
    // Left
    this.addQuad(new Quad(npn, npp, nnp, nnn));
    // Right
    this.addQuad(new Quad(ppn, pnn, pnp, ppp));
    // Top
    this.addQuad(new Quad(ppp, npp, npn, ppn));
    // Bottom
    this.addQuad(new Quad(pnp, pnn, nnn, nnp));
    */
    // Old, easy system caused quads to share point references, which messed up certain translations,
    // eg, made it rotate ~3x faster because every point was rotated 3 times.
    // Front
    this.addQuad(
      new Quad(
        new Point(hs, hs, -hs),
        new Point(-hs, hs, -hs),
        new Point(-hs, -hs, -hs),
        new Point(hs, -hs, -hs)
      )
    );
    // Back
    this.addQuad(
      new Quad(
        new Point(hs, hs, hs),
        new Point(hs, -hs, hs),
        new Point(-hs, -hs, hs),
        new Point(-hs, hs, hs)
      )
    );
    // Left
    this.addQuad(
      new Quad(
        new Point(-hs, hs, -hs),
        new Point(-hs, hs, hs),
        new Point(-hs, -hs, hs),
        new Point(-hs, -hs, -hs)
      )
    );
    // Right
    this.addQuad(
      new Quad(
        new Point(hs, hs, -hs),
        new Point(hs, -hs, -hs),
        new Point(hs, -hs, hs),
        new Point(hs, hs, hs)
      )
    );
    // Top
    this.addQuad(
      new Quad(
        new Point(hs, hs, hs),
        new Point(-hs, hs, hs),
        new Point(-hs, hs, -hs),
        new Point(hs, hs, -hs)
      )
    );
    // Bottom
    this.addQuad(
      new Quad(
        new Point(hs, -hs, hs),
        new Point(hs, -hs, -hs),
        new Point(-hs, -hs, -hs),
        new Point(-hs, -hs, hs)
      )
    );

    this.translate(this.center.toVector());
  }
}
