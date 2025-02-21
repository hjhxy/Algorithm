class ExamRoom {
    private seats: number[] = [];
    private count: number = 0;
    constructor(n: number) {
        for (let i = 0; i < n; i++){
            this.seats[i] = 0;
        }
    }

    seat(): number {
        if(this.count === 0){
            this.seats[0] = 1;
            this.count++;
            return 0;
        } else {
            let maxDistance = 0;
            let maxIndex = -1;
            for (let i = 0; i < this.seats.length; ){
                let distance = 0;
                let j=i;
                while(this.seats[i] == 0){
                    distance++;
                    i++;
                }
                console.log(j, i, this.seat[j], this.seat[i], distance);
                if(this.seat[j]==1&&this.seat[i]==1&& Math.floor(distance/2)>maxDistance){
                    maxDistance = Math.floor(distance/2);
                    maxIndex = i + Math.floor(distance/2);
                } else if(this.seat[i]!==1||this.seat[j]!==1) {
                    maxDistance = distance;
                    maxIndex = this.seat[i]==0?i:j;
                }
                i++;
            }
            this.seat[maxIndex] = 1;
            this.count++;
            return maxIndex;
        }
    }

    leave(p: number): void {
        this.seats[p] = 0;
        this.count = this.count -1;
    }
}

/**
 * Your ExamRoom object will be instantiated and called as such:
 * var obj = new ExamRoom(n)
 * var param_1 = obj.seat()
 * obj.leave(p)
 */


export {}