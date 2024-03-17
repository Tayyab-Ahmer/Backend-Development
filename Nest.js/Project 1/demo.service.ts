import { Injectable } from '@nestjs/common';
import { error } from 'console';
import { CreateDemoDto } from './createDemo.dto';
import { create } from 'domain';
import { UpdateDemoDto } from './updateDemo.dto';

@Injectable()
export class DemoService {
    private demoArray: { id: number; name: string }[] = [
        { id: 0, name: 'tayyab' },
        { id: 1, name: 'ali' },
        { id: 2, name: 'tayyab' },
        { id: 3, name: 'ahmer' },
        { id: 4, name: 'tayyab' },
    ];

    getDemo(name?: string): { id: number; name: string }[] {
        return this.demoArray.filter((demo) => (name ? demo.name === name : true));
    }

    getDemoid(id: number): { id: number; name: string } | null {
        const demo = this.demoArray.find((demo) => demo.id == id);
        return demo;
    }


    createDemo(createDemoDto: CreateDemoDto): { id: number; name: string } {
        const newDemo = {
            id: this.demoArray.length + 1,
            ...createDemoDto,
        };
        this.demoArray.push(newDemo);
        return newDemo;
    }

    updateDemo(id: number, updateDemoDto: UpdateDemoDto): { id: number; name: string } {
        const index = this.demoArray.findIndex((demo) => demo.id == id);
        if (index != -1) {
            this.demoArray[index] = { ...this.demoArray[index], ...updateDemoDto };
            return this.demoArray[index];
        } else {
            throw new Error('Data Not Found');
        }
    }

    removeDemo(id: number): { id: number; name: string } {
        const index = this.demoArray.findIndex((demo) => demo.id == id);
        if (index != -1) {
            return this.demoArray.splice(index, 1)[0];
        } else {
            throw new Error('Data Not Found');
        }
    }
}

