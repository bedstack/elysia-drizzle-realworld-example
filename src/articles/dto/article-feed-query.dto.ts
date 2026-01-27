import { type } from 'arktype';
import { MAX_LIMIT, MIN_LIMIT, MIN_OFFSET } from '@/shared/constants';

/**
 * DTO for article feed query parameters.
 * Uses offset-based pagination with the following constraints:
 * - limit: number of items per request (default: DEFAULT_LIMIT, min: MIN_LIMIT, max: MAX_LIMIT)
 * - offset: number of items to skip (default: DEFAULT_OFFSET, min: MIN_OFFSET)
 */
export const ArticleFeedQueryDto = type({
  'limit?': `string.numeric.parse |> ${MIN_LIMIT} <= number.integer <= ${MAX_LIMIT}`,
  'offset?': `string.numeric.parse |> number.integer >= ${MIN_OFFSET}`,
});

export type ArticleFeedQueryDto = typeof ArticleFeedQueryDto.infer;
