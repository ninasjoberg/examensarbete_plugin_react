// Saves options to chrome.storage
function save_options() {
    var sex = document.getElementById('sex').value;
    chrome.storage.sync.set({
      sex: sex,
    }, function() {
      // Update status to let user know options were saved.
      var status = document.getElementById('status');
      status.textContent = 'Inställningar sparade.';
      setTimeout(function() {
        status.textContent = '';
      }, 750);
    });
  }
  
  // Restores select box state using the preferences
  // stored in chrome.storage.
  function restore_options() {
    // Use default value sex = 'woman'.
    chrome.storage.sync.get({
      sex: 'woman',
    }, function(items) {
      document.getElementById('sex').value = items.sex;
    });
  }
  document.addEventListener('DOMContentLoaded', restore_options);
  document.getElementById('save').addEventListener('click',
      save_options);