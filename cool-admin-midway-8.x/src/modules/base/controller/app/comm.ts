import { Provide, Inject, Get, Post, Query, Config } from '@midwayjs/core';
import {
  CoolController,
  BaseController,
  CoolEps,
  TagTypes,
  CoolUrlTag,
  CoolTag,
} from '@cool-midway/core';
import { Context } from '@midwayjs/koa';
import { BaseSysParamService } from '../../service/sys/param';
import { PluginService } from '../../../plugin/service/info';

/**
 * 不需要登录的后台接口
 */
@CoolUrlTag()
@Provide()
@CoolController()
export class BaseAppCommController extends BaseController {
  @Inject()
  pluginService: PluginService;

  @Inject()
  ctx: Context;

  @Config('module.base.allowKeys')
  allowKeys: string[];

  @Inject()
  eps: CoolEps;

  @Inject()
  baseSysParamService: BaseSysParamService;

  @CoolTag(TagTypes.IGNORE_TOKEN)
  @Get('/param', { summary: '参数配置' })
  async param(@Query('key') key: string) {
    if (!this.allowKeys.includes(key)) {
      return this.fail('非法操作');
    }
    return this.ok(await this.baseSysParamService.dataByKey(key));
  }

  /**
   * 实体信息与路径
   * @returns
   */
  @CoolTag(TagTypes.IGNORE_TOKEN)
  @Get('/eps', { summary: '实体信息与路径' })
  public async getEps() {
    return this.ok(this.eps.app);
  }

  /**
   * 文件上传
   */
  @Post('/upload', { summary: '文件上传' })
  async upload() {
    const file = await this.pluginService.getInstance('upload');
    return this.ok(await file.upload(this.ctx));
  }

  /**
   * 文件上传模式，本地或者云存储
   */
  @Get('/uploadMode', { summary: '文件上传模式' })
  async uploadMode() {
    const file = await this.pluginService.getInstance('upload');
    return this.ok(await file.getMode());
  }
}
