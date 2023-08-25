
lcass BaseInt {
  constructor(init) {
  }
}
/*
 * Int8
 */
export class Int8 extends BaseInt {
  buffer: ArrayBuffer
  constructor(init: number) {
    if (!Number.isInteger(init)) {
      throw new TypeError('The Int class constructor\'s argument \'init\' must be integer.')
    }
    
    this.buffer = new ArrayBuffer(1) // 8bit = 1byte

    new DataView(buffer).setInt8(0, init, true)
  }
}
