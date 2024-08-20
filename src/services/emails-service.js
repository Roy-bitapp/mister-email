import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'

export const emailsService = {
    getEmails,
    deleteEmails,
    save,
    isFiltered,
    getEmailById,
    getEmailsByText
}

const STORAGE_KEY = 'emails'

_generateEmails()

async function getEmails() {
    const emails = await storageService.query(STORAGE_KEY)
    return emails
}

async function save(emails) {
    if (emails)
        return utilService.saveToStorage(STORAGE_KEY, emails)
}

function deleteEmails(){
    utilService.deleteFromStorage(STORAGE_KEY)
}

async function getEmailById(emailId) {
    const emails = await getEmails();
    console.log(emailId)
    console.log("roya",emails)  
    const details = emails.find(email => email.id === emailId)
    console.log(details)
    return emails.find(email => email.id === emailId);
}

function _generateEmails() {
    let emails = utilService.loadFromStorage(STORAGE_KEY)

    if (!emails || !emails.length) {
        emails = [
            { id: utilService.makeId(), subject: 'Welcome to Gmail!', body: 'Hope this works', isRead: false, isStarred: false, sentAt: Date.now() - 1000000, removedAt: null, from: 'momo@momo.com', to: 'user@appsus.com' },
            { id: utilService.makeId(), subject: 'Technolog newsletter!', body: 'Balagan', isRead: false, isStarred: false, sentAt: Date.now() - 2000000, removedAt: null, from: 'tech@newsletter.com', to: 'user@appsus.com' },
            { id: utilService.makeId(), subject: 'Only today!', body: 'Hot bagels, 1 for 5, 2 for 10!', isRead: true, isStarred: false, sentAt: Date.now() - 3000000, removedAt: null, from: 'deals@bagels.com', to: 'user@appsus.com' },
            { id: utilService.makeId(), subject: 'Here is what I think about birds', body: 'They can fly', isRead: false, isStarred: true, sentAt: Date.now() - 4000000, removedAt: null, from: 'user@appsus.com', to: 'user@appsus.com' },
            { id: utilService.makeId(), subject: 'Important Update', body: 'Please update your account information', isRead: true, isStarred: false, sentAt: Date.now() - 5000000, removedAt: null, from: 'user@appsus.com', to: 'user@appsus.com' },
            { id: utilService.makeId(), subject: 'Your subscription is about to expire', body: 'Renew your subscription now', isRead: false, isStarred: false, sentAt: Date.now() - 6000000, removedAt: null, from: 'noreply@subscription.com', to: 'user@appsus.com' },
            { id: utilService.makeId(), subject: 'New Features Released', body: 'Check out the latest updates in our app', isRead: true, isStarred: true, sentAt: Date.now() - 7000000, removedAt: null, from: 'update@features.com', to: 'user@appsus.com' },
            { id: utilService.makeId(), subject: 'Your order has been shipped', body: 'Track your order using this link', isRead: false, isStarred: false, sentAt: Date.now() - 8000000, removedAt: null, from: 'orders@store.com', to: 'user@appsus.com' },
            { id: utilService.makeId(), subject: 'Daily Motivation', body: 'Believe in yourself!', isRead: true, isStarred: false, sentAt: Date.now() - 9000000, removedAt: null, from: 'motivation@daily.com', to: 'user@appsus.com' },
            { id: utilService.makeId(), subject: 'Weekend Sale!', body: 'Get up to 50% off this weekend only!', isRead: false, isStarred: true, sentAt: Date.now() - 10000000, removedAt: null, from: 'sales@shop.com', to: 'user@appsus.com' },
            { id: utilService.makeId(), subject: 'Conference Invitation', body: 'You are invited to our annual tech conference', isRead: true, isStarred: true, sentAt: Date.now() - 11000000, removedAt: null, from: 'events@conference.com', to: 'user@appsus.com' },
            { id: utilService.makeId(), subject: 'New Connection Request', body: 'Someone wants to connect with you', isRead: false, isStarred: false, sentAt: Date.now() - 12000000, removedAt: null, from: 'social@network.com', to: 'user@appsus.com' },
            { id: utilService.makeId(), subject: 'Password Reset', body: 'Click here to reset your password', isRead: true, isStarred: false, sentAt: Date.now() - 13000000, removedAt: null, from: 'security@appsus.com', to: 'user@appsus.com' },
            { id: utilService.makeId(), subject: 'Job Opportunity', body: 'A new job that matches your profile', isRead: false, isStarred: true, sentAt: Date.now() - 14000000, removedAt: null, from: 'jobs@career.com', to: 'user@appsus.com' },
            { id: utilService.makeId(), subject: 'Your invoice for July', body: 'Here is your invoice for last month', isRead: true, isStarred: false, sentAt: Date.now() - 15000000, removedAt: null, from: 'billing@company.com', to: 'user@appsus.com' },
            { id: utilService.makeId(), subject: 'Happy Birthday!', body: 'Wishing you a wonderful day!', isRead: false, isStarred: true, sentAt: Date.now() - 16000000, removedAt: null, from: 'user@appsus.com', to: 'user@appsus.com' },
            { id: utilService.makeId(), subject: 'Welcome to our platform', body: 'Thank you for joining us!', isRead: true, isStarred: false, sentAt: Date.now() - 17000000, removedAt: null, from: 'welcome@platform.com', to: 'user@appsus.com' },
            { id: utilService.makeId(), subject: 'Your session is about to start', body: 'Join your session using this link', isRead: false, isStarred: true, sentAt: Date.now() - 18000000, removedAt: null, from: 'user@appsus.com', to: 'user@appsus.com' },
            { id: utilService.makeId(), subject: 'Reminder: Meeting tomorrow', body: 'Don’t forget about your meeting tomorrow at 10 AM', isRead: true, isStarred: false, sentAt: Date.now() - 19000000, removedAt: null, from: 'reminder@appsus.com', to: 'user@appsus.com' },
            { id: utilService.makeId(), subject: 'Special offer just for you!', body: 'Exclusive discounts on your favorite products', isRead: false, isStarred: false, sentAt: Date.now() - 20000000, removedAt: null, from: 'offers@shop.com', to: 'user@appsus.com' }
        ];
        
        utilService.saveToStorage(STORAGE_KEY, emails)
    }
}

function isFiltered(email, filterBy, loggedinUser) {

    if (!filterBy.status || filterBy.status === 'inbox') 
        return (email.to != loggedinUser.email || email.removedAt)
    
    if (filterBy.status === 'sent') 
        return email.from != loggedinUser.email;
    
    if (filterBy.status === 'star')
        return !email.isStarred;

    if (filterBy.status === 'trash')
        return !email.removedAt;
}


async function getEmailsByText(emails, text){

    if(text == '')
        return await getEmails()

    const txtLower = text.toLowerCase();
    
    const filteredEmails = emails.filter(email =>
        email.subject.toLowerCase().includes(txtLower) ||
        email.body.toLowerCase().includes(txtLower) ||
        email.from.toLowerCase().includes(txtLower)
    );

    return filteredEmails
}



