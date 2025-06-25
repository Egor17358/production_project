import { rtkApi } from '@/shared/api/rtkApi';
import { Notification } from '../model/types/notification';

const notificationApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getNotifications: build.query<Notification[], null>({
      query: () => ({
        url: '/notifications',
      }),
    }),
    // createArticleRecomendation: build.mutation({
    //   query: limit => ({
    //     url: '/articles',
    //     params: {
    //       _limit: limit,
    //     },
    //     method: 'POST',
    //   }),
    // }),
  }),
});

export const useNotifications = notificationApi.useGetNotificationsQuery;
// export const useCreateRecommendationsList =
//   recommendationsApi.useCreateArticleRecomendationMutation;
