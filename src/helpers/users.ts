import type { UserInterface } from '@/constants/interfaces/user';
import type { Ref } from 'vue';
import { computed, ref } from 'vue';

export const searchParams = ['first_name', 'last_name', 'email'];

export const searchUsers = (users: Ref<UserInterface[]>) => {
  const searchString = ref('');

  const filteredUsers = computed(() => {
    if (!searchString.value) {
      return users.value;
    }

    return users.value.filter((user) =>
      Object.entries(user).reduce(
        (acc, [key, value]) =>
          acc ||
          (searchParams.includes(key) &&
            (value as string).toLowerCase().includes(searchString.value.toLowerCase())),
        false
      )
    );
  });

  return { searchString, filteredUsers };
};
