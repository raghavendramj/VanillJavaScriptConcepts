function StopWatch() {

    let startTime,
        endTime,
        running,
        duration = 0;

    this.start = function () {
        if (running) {
            throw new Error("Stop watch already been started!");
        }
        running = true;
        console.log(duration);
        startTime = new Date();
    }

    this.stop = function () {
        if (!running) {
            throw new Error("Stop watch was not started!");
        }
        running = false;
        endTime = new Date();
        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds;
    }

    this.reset = function(){
        startTime = null;
        endTime = null;
        running = null;
        duration = 0;
    }

    Object.defineProperty(this, 'duration', {
        get: function () {

            if(!startTime){
                throw new Error("Stop watch was not started or it has been resetted!");
            }
            let till = running ? new Date() : endTime;
            const seconds = (till.getTime() - startTime.getTime()) / 1000;
            return seconds;
        }
    });
}


const stopWatch = new StopWatch();
stopWatch.start();
stopWatch.duration;