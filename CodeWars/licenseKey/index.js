const updateLicenseKeyFormat = (s, k) => {
    return s.split('-').join('').split('').map((el, idx) => idx % k == 0 && idx != 0 ? `-${el}` : el).join('').toUpperCase()
};

console.log(updateLicenseKeyFormat("5F3Z-2e-9-w", 4))

// S = "5F3Z-2e-9-w", K = 4
// Output: "5F3Z-2E9W"

// S = "2-5g-3-J", K = 2
// Output: "25-G3-J"