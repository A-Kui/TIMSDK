
Pod::Spec.new do |spec|
  spec.name         = 'TIMCommon'
  spec.version      = '7.1.3925'
  spec.platform     = :ios 
  spec.ios.deployment_target = '8.0'
  spec.license      = { :type => 'Proprietary',
      :text => <<-LICENSE
        copyright 2017 tencent Ltd. All rights reserved.
        LICENSE
       }
  spec.homepage     = 'https://cloud.tencent.com/document/product/269/3794'
  spec.documentation_url = 'https://cloud.tencent.com/document/product/269/9147'
  spec.authors      = 'tencent video cloud'
  spec.summary      = 'TIMCommon'
  
  spec.requires_arc = true

  spec.source = { :git => 'https://github.com/tencentyun/TIMSDK.git', :tag => spec.version}
  spec.preserve_paths = 'Framework/TIMCommon.framework'
  spec.public_header_files = 'Framework/TIMCommon.framework/Headers/*.h'
  spec.vendored_frameworks = 'Framework/TIMCommon.framework'
  spec.xcconfig = { 'HEADER_SEARCH_PATHS' => '${PODS_ROOT}/TIMCommon/Framework/TIMCommon.framework/Headers/'}
end