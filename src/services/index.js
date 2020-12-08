export const baseURL = `https://api.airtable.com/v0/appyuNKliz2BrJEa6/notes`
export const taskURL = `https://api.airtable.com/v0/appyuNKliz2BrJEa6/tasks`
export const todoURL = 'https://api.airtable.com/v0/appyuNKliz2BrJEa6/tasks?filterByFormula=status+%3D+%22todo%22'
export const doingURL = 'https://api.airtable.com/v0/appyuNKliz2BrJEa6/tasks?filterByFormula=status+%3D+%22doing%22'
export const doneURL = 'https://api.airtable.com/v0/appyuNKliz2BrJEa6/tasks?filterByFormula=status+%3D+%22done%22'


export const config = {
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
  }
}