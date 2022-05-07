const bodyPartImages = {
    // 'মহুরি': './bodyparts/img.jpeg'
}

class Measurement {
    constructor(of, value) {
        this.of = of
        this.value = value
    }
}

class Cut {
    constructor(start, angle, span) {
        this.start = start
        this.angle = angle
        this.span = span
    }
    end() {
        return [this.start[0] + (Math.cos(this.angle) * this.span),
                this.start[1] + (Math.sin(this.angle) * this.span)]
    }
}

class Cutting {
    constructor(clothDimensions, measurements, cuts) {
        this.clothDimensions = clothDimensions
        this.measurements = measurements
        this.cuts = cuts
    }
}
