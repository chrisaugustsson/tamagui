import { apiRoute } from '~/features/api/apiRoute'
import { ensureAuth } from '~/features/api/ensureAuth'
import type { UserContextType } from '~/features/auth/types'
import {
  getMainTeam,
  getOrgTeams,
  getPersonalTeam,
  getSubscriptions,
  getUserAccessInfo,
  getUserDetails,
  getUserPrivateInfo,
  getUserTeams,
} from '~/features/user/helpers'

export default apiRoute(async (req) => {
  const { supabase, user } = await ensureAuth({ req })

  const [userTeams, userDetails, subscriptions, accessInfo] = await Promise.all([
    getUserTeams(supabase),
    getUserDetails(supabase),
    getSubscriptions(supabase),
    getUserAccessInfo(supabase, user),
  ])

  return Response.json({
    user,
    userDetails,
    subscriptions,
    teams: {
      all: userTeams,
      personal: getPersonalTeam(userTeams, user.id),
      orgs: getOrgTeams(userTeams),
      main: getMainTeam(userTeams),
    },
    accessInfo,
  } satisfies UserContextType)
})
