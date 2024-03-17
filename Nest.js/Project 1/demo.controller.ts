import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreateDemoDto } from './createDemo.dto';
import { UpdateDemoDto } from './updateDemo.dto';
import { DemoService } from './demo.service';

@Controller('demo')
export class DemoController {

    constructor(private readonly demoserive: DemoService) { }

    @Get()
    getDemo(@Query('name') name: 'tayyab' | 'ahmer') {

        return this.demoserive.getDemo(name);
    }

    @Get('/:id')
    getDemoID(@Param('id') id: number) {

        return this.demoserive.getDemoid(id);

    }

    @Post()
    createDemo(@Body() createdemodto: CreateDemoDto) {

        return this.demoserive.createDemo(createdemodto);

    }

    @Put(':id')
    updateDemo(@Param('id') id: number, @Body() updatedemodto: UpdateDemoDto) {

        return this.demoserive.updateDemo(id, updatedemodto);
    }

    @Delete(':id')
    deleteDemo(@Param('id') id: number) {

        return this.demoserive.removeDemo(id);
    }


}
