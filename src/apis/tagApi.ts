import service from './index.ts';
import { Tag } from '../models/Tag.ts';

/**
 * 添加标签
 */
export function addTag(tag: Tag) {
  return service({
    url: '/admin/tag',
    method: 'POST',
    data: {
      displayName: tag.displayName,
      slug: tag.slug,
      color: tag.color
    }
  });
}

/**
 * 根据标签 ID 数组删除标签
 */
export function delTagByIds(ids: Array<number>) {
  return service({
    url: '/admin/tag',
    method: 'DELETE',
    data: ids
  });
}

/**
 * 根据标签别名数组删除标签
 */
export function delTagBySlugs(slugs: Array<String>) {
  return service({
    url: '/admin/tag/slug',
    method: 'DELETE',
    data: slugs
  });
}

/**
 * 修改标签
 */
export function updateTag(tag: Tag) {
  return service({
    url: '/admin/tag',
    method: 'PUT',
    data: tag
  });
}

/**
 * 获取所有标签
 */
export function allTags() {
  return service({
    url: '/admin/tag',
    method: 'GET'
  });
}

/**
 * 分页获取标签
 * @param page 当前页数
 * @param size 每页条数
 */
export function tagsByPage(page: number, size: number) {
  return service({
    url: `/admin/tag/${page}/${size}`,
    method: 'GET'
  });
}